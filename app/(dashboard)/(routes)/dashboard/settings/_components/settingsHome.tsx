"use client";


import useGetMembership from "@/hooks/useGetMembership";
import useSettingsFilter from "@/hooks/useSettingsFilter";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  generateApiKey,
  regenerateApiKey,
} from "@/lib/token-generator";

import toast from "react-hot-toast";
import { ICONS } from "@/lib/icons";

import { SettingsTab } from "./settings-tabs";
import { ManageSetting } from "./manage-settings";


export const SettingsHome = () => {
  const { activeItem } = useSettingsFilter();
  const { data } = useGetMembership();
  const [apiKey, setApiKey] = useState("");


  useEffect(() => {
    const apiKey = Cookies.get("api_key");
    if (!apiKey) {
      generateApiKeyHandler();
    } else {
      setApiKey(apiKey);
    }
  }, []);

  const generateApiKeyHandler = async () => {
    await generateApiKey().then((res:any) => {
      Cookies.set("api_key", res);
      setApiKey(res);
    });
  };

  const handleCopy = () => {
    const smallText = document.querySelector(".copy-text") as HTMLElement;
    if (smallText) {
      const textToCopy = smallText.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        toast.success("Copied");
      });
    }
  };

  const handleRegenerateApiKey = async () => {
    await regenerateApiKey().then((res:any) => {
      Cookies.set("api_key", res);
      setApiKey(res);
      toast.success("API Key updated!");
    });
  };

  return (
    <div className="w-[85%] p-5">
      <SettingsTab/>
      {activeItem === "Customize Profile" && (
        <div className="w-full flex justify-center">
           
      <ManageSetting/>
        </div>
      )}
      {activeItem === "API Access" && (
        <div>
          {data?.plan === "LAUNCH" ? (
            <div className="w-full h-[90vh] flex items-center justify-center">
              <h3>
                Please update your subscription plan to get access of API.
              </h3>
            </div>
          ) : (
            <div className="p-4 w-full overflow-hidden">
              <h3>API KEY:</h3>
              <p className="whitespace-pre-line overflow-hidden break-words copy-text">
                {apiKey}
              </p>
              <div className="flex items-center">
                <div
                  className="h-[38px] w-[90px] rounded my-3 cursor-pointer bg-[#DFE7FF] flex items-center justify-center"
                  onClick={handleCopy}
                >
                  <span className="text-lg">{ICONS.copy}</span>
                  <span className="pl-1">copy</span>
                </div>
                <div
                  className="h-[38px] w-[120px] ml-4 rounded my-3 cursor-pointer bg-[#DFE7FF] flex items-center justify-center"
                  onClick={handleRegenerateApiKey}
                >
                  <span className="text-lg">{ICONS.regenerate}</span>
                  <span className="pl-1">Regenerate</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};


