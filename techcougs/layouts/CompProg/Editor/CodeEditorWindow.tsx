import { code } from '@nextui-org/react';
import React, { useState } from 'react'
import Editor from "@monaco-editor/react";


function CodeEditorWindow({
  code,
  language,
  onChange,
  setCode
}: {
  code: string,
  language: string,
  onChange: (action: any, data: any) => void,
    setCode: (code: string) => void
}) {

  const handleEditorChange = (value: string | undefined) => {
    setCode(code)
    onChange("code", value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={code}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default CodeEditorWindow