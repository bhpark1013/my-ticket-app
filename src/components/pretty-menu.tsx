/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/2gS9vndCVtB
 */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { JSX, SVGProps } from "react";

export function PrettyMenu() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-10">Welcome to ElderEase</h2>
      <div className="grid grid-cols-2 gap-6 w-full max-w-md">
        <Card className="flex flex-col items-center p-6 space-y-4 bg-white shadow rounded-lg">
          <DumbbellIcon className="w-16 h-16" />
          <p className="text-center font-medium">Gym Reservation</p>
          <Button variant="outline">Book Now</Button>
        </Card>
        <Card className="flex flex-col items-center p-6 space-y-4 bg-white shadow rounded-lg">
          <TicketIcon className="w-16 h-16" />
          <p className="text-center font-medium">Concert Ticket Reservation</p>
          <Button variant="outline">Book Now</Button>
        </Card>
        <Card className="flex flex-col items-center p-6 space-y-4 bg-white shadow rounded-lg">
          <PlaneIcon className="w-16 h-16" />
          <p className="text-center font-medium">Traveling</p>
          <Button variant="outline">Book Now</Button>
        </Card>
        <Card className="flex flex-col items-center p-6 space-y-4 bg-white shadow rounded-lg">
          <MoreHorizontalIcon className="w-16 h-16" />
          <p className="text-center font-medium">More</p>
          <Button variant="outline">Explore</Button>
        </Card>
      </div>
    </div>
  );
}

function PlaneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

function DumbbellIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6.5 6.5 11 11" />
      <path d="m21 21-1-1" />
      <path d="m3 3 1 1" />
      <path d="m18 22 4-4" />
      <path d="m2 6 4-4" />
      <path d="m3 10 7-7" />
      <path d="m14 21 7-7" />
    </svg>
  );
}

function TicketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  );
}

function MoreHorizontalIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}
