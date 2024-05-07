import React, { useState, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as Babel from '@babel/standalone';

export default function CodeEditor() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [compiledCode, setCompiledCode] = useState('');

  useEffect(() => {
    const compileCode = setTimeout(() => {
      if (code && language === 'javascript') {
        try {
          const compiled = Babel.transform(code, { presets: ['react', 'env'] }).code;
          setCompiledCode(compiled);
        } catch (error) {
          console.error('Compilation error:', error);
          setCompiledCode('');
        }
      } else {
        setCompiledCode('');
      }
    }, 6000);

    return () => clearTimeout(compileCode);
  }, [code, language]);

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const options = {
    autoIndent: 'full',
    contextmenu: true,
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: 'always',
    minimap: {
      enabled: true,
    },
    scrollbar: {
      horizontalSliderSize: 4,
      verticalSliderSize: 18,
    },
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    automaticLayout: true,
  };

  return (
    <div>
      <div>
        <h2>Enter your code:</h2>
        <MonacoEditor
          height="400"
          language={language}
          value={code}
          options={options}
          onChange={handleEditorChange}
        />
      </div>
      <hr />
      <div>
        <h2>Compiled Code:</h2>
        <MonacoEditor
          height="400"
          language={language}
          value={compiledCode}
          options={options}
          readOnly
        />
      </div>
    </div>
  );
}
