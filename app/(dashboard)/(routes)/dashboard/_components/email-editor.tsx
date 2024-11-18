"use client";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import React, { useEffect, useRef, useState } from "react";
import { DefaultJsonData } from "@/data/default";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { saveEmail } from "@/actions/save-email";
import toast from "react-hot-toast";
import {  PacmanLoader} from "react-spinners"
import { GetEmailDetails } from "@/actions/get-email-details";
import axios from "axios";


const Emaileditor = ({ subjectTitle }: { subjectTitle: string }) => {
  const [loading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData);
  const user = useCurrentUser()
  const emailEditorRef = useRef<EditorRef>(null);
  const history = useRouter();

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(async (data) => {
      const { design, html } = data;
      setJsonData(design);
      
      try {
         await axios.post("/api/send-email", {
          userEmail: ["ainexatix@gmail.com"],
          subject: subjectTitle,
          content: html,
        })
        toast.success("Email sent successfully");
        history.push("/dashboard/write");
      } catch (error) {
        toast.error("Failed to send email. Please try again.");
        console.error("Error:", error);
      }
      
    });
  };

  useEffect(() => {
    getEmailDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onReady: EmailEditorProps["onReady"] = () => {
    const unlayer: any = emailEditorRef.current?.editor;
    unlayer?.loadDesign(jsonData);
  };

  const saveDraft = async () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(async (data) => {
      const { design } = data;
      setLoading(true)
    await saveEmail({
      title: subjectTitle,
      content: JSON.stringify(design),
      newsLetterOwnerId: user?.id as string
      
    }).then((data)=>{
      if(data?.error){
toast.success(data.error)
setLoading(false)
      }
      if(data?.success){
        toast.success(data.success)
        
        window.location.reload()
      }
    }
  )
  
    })
  }

  const getEmailDetails = async () => {
    setLoading(true)
    await GetEmailDetails({
      title: subjectTitle,
      newsLetterOwnerId: user?.id,
    }).then((res: any) => {
      if (res) {
        setJsonData(JSON.parse(res?.content));
      }
      setLoading(false);
    });
  };

  if (loading) {
    history.refresh()
    return (
      <div className="flex justify-center items-center h-screen">
       <PacmanLoader
        color={"#36d7b7"}  
        loading={loading}
        size={25}
       margin={2}
      />
      </div>
    )
  }
  return (
    <>
      {!loading && (
        <div className="w-full h-[90vh] relative">
          <EmailEditor
            minHeight={"80vh"}
            ref={emailEditorRef}
            onReady={onReady}
          />
          <div className="absolute bottom-0 flex items-center justify-end gap-4 right-0 w-full border-t p-3">
            <Button
              className="bg-transparent cursor-pointer flex items-center gap-1 text-black border border-[#00000048] text-lg rounded-lg"
              onClick={saveDraft}
            >
              <span className="opacity-[.7]">Save Draft</span>
            </Button>
            <Button
              className="bg-[#000] text-white cursor-pointer flex items-center gap-1 border text-lg rounded-lg"
              onClick={exportHtml}
            >
              <span>Send</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Emaileditor;
