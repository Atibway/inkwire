"use client"
import { useCurrentUser } from '@/hooks/use-current-user';
import { ICONS } from '@/lib/icons';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

export const HomePageUrl = () => {
    const [copied, setCopied] = useState(false);
    const  user  = useCurrentUser()
  const handleCopyClick = () => {
    const smallText = document.querySelector(".copy-text") as HTMLElement;
    if (smallText) {
      const textToCopy = smallText.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        toast.success("Copied");
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    }
  };
  return (
    <div>
    <h4 className="font-medium">Home page</h4>

    <div
      className="w-full px-2 my-1 h-[38px] bg-transparent border rounded-lg relative flex items-center cursor-pointer"
      onClick={handleCopyClick}
    >
      <small
        className={`w-[70%] text-sm overflow-hidden overflow-ellipsis whitespace-nowrap copy-text ${
          copied ? "bg-blue-200" : "bg-transparent"
        }`}
      >
        {process.env.NEXT_PUBLIC_WEBSITE_URL}/subscribe?userId=
        {user?.id}
      </small>
      <div className="absolute h-[38px] w-[90px] rounded-r-lg bg-[#DFE7FF] right-0 flex items-center justify-center">
        <span className="text-lg">{ICONS.copy}</span>
        <span className="pl-1">copy</span>
      </div>
    </div>
  </div>
  )
}
