"use client";

import { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';

export default function SchedulePage() {
  const [slots, setSlots] = useState<Date[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      fetchSlots(code);
    } else {
      initiateOAuth();
    }
  }, []);

  async function initiateOAuth() {
    try {
      const response = await fetch('/api/schedule/google-calendar', {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Response is not JSON');
      }

      const data = await response.json();
      if (!data.url) {
        throw new Error('OAuth URL not found in response');
      }
      window.location.href = data.url;
    } catch (error) {
      console.error('Failed to initiate OAuth:', error);
      alert('Failed to start authentication. Please try again.');
    }
  }

  async function fetchSlots(code: string) {
    setIsLoading(true);
    try {
      const response = await fetch('/api/schedule/google-calendar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ code, action: 'fetch-slots' }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch slots: ${response.status}`);
      }

      const data = await response.json();
      if (!data.events) {
        throw new Error('No events data received');
      }

      setSlots(data.events.map((event: any) => new Date(event.start.dateTime)));
    } catch (error) {
      console.error('Failed to fetch slots:', error);
      alert('Failed to load available slots. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleBookSlot() {
    const code = new URLSearchParams(window.location.search).get('code');
    if (!code) {
      initiateOAuth();
      return;
    }

    setIsLoading(true);
    try {
      const selectedDate = slots[0]; // Get the first selected date
      if (!selectedDate) {
        throw new Error('Please select a date first');
      }

      const eventDetails = {
        summary: 'Meeting with Pravaha',
        description: 'Scheduled meeting via Pravaha booking system',
        start: {
          dateTime: selectedDate.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
        end: {
          dateTime: new Date(selectedDate.getTime() + 3600000).toISOString(), // 1 hour meeting
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
      };

      const response = await fetch('/api/schedule/google-calendar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ code, action: 'book-slot', eventDetails }),
      });

      if (!response.ok) {
        throw new Error(`Failed to book slot: ${response.status}`);
      }

      const data = await response.json();
      if (!data.event) {
        throw new Error('No event data received');
      }

      alert('Slot booked successfully!');
      await fetchSlots(code); // Refresh slots after booking
    } catch (error) {
      console.error('Failed to book slot:', error);
      alert(error instanceof Error ? error.message : 'Failed to book slot. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-50">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Schedule a Meeting</h2>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Select Available Time Slot</h3>
            <p className="text-gray-600 mb-4">{slots.length ? 'Click on a date to select a time slot' : 'Loading available slots...'}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <Calendar 
                selected={slots}
                mode="multiple"
                className="rounded-lg border-2 border-gray-100 p-4"
                disabled={(date) => !slots.some(slot => 
                  slot.getDate() === date.getDate() && 
                  slot.getMonth() === date.getMonth() && 
                  slot.getFullYear() === date.getFullYear()
                )}
              />
            </div>
            <div className="flex-1">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-md font-medium mb-4 text-gray-700">Selected Time Slots</h4>
                {slots.length > 0 ? (
                  <ul className="space-y-2">
                    {slots.map((slot, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        {slot.toLocaleString('en-US', { 
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500">No slots selected</p>
                )}
                <button 
                  className={`mt-6 w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 ${isLoading || !slots.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={handleBookSlot}
                  disabled={isLoading || !slots.length}
                >
                  {isLoading ? 'Booking...' : slots.length ? 'Book Selected Slot' : 'Select a Slot'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}