import { useState,useCallback,useEffect,useRef } from "react"

function Pass() {
    const [length,setLength] = useState(8)
    const [numberAllowed,setNumberAllowed] = useState(false)
    const [symbolAllowed,setSymbolAllowed] = useState(false)
    const [password,setPassword] = useState('')
    const [isCopied, setIsCopied] = useState(false);
    //useRef hook
    const passwordRef = useRef(null)
    const passwordGenerator = useCallback(()=>{
        let pass = ''
        let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if(numberAllowed) str += '0123456789'
        if(symbolAllowed) str += '!@#$%^&*()_+=/-{}<>[]~?'
        for(let i = 1;i<=length;i++){
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        } 
        setPassword(pass)
    },[length,numberAllowed,symbolAllowed,setPassword])
    

    const copyPasswordToClipboard = useCallback(()=>{
        passwordRef.current.select()
        passwordRef.current.setSelectionRange(0,30)
        window.navigator.clipboard.writeText(password)
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000); // Reset after 5 second
    },[password])

    useEffect(()=>{
        passwordGenerator()
    },[length,numberAllowed,symbolAllowed,passwordGenerator])
    
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500
    bg-gray-700 justify-center" >
        <h1 className="text-2xl text-center font-bold py-2 my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input type="text" value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly 
            ref={passwordRef} /><button
            onClick={copyPasswordToClipboard}
            className={`outline-none px-3 py-1 shrink-0 transition-all transform 
                        ${isCopied ? "bg-green-500" : "bg-blue-600"} 
                        hover:scale-105 active:scale-95 text-white`}
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
          
        </div>
        <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
                <input type="range"
                min={6} max={30}
                value={length}
                className="cursor-pointer" 
                onChange={(e)=>{setLength(e.target.value)}} />
                <label>Length:{length}</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input 
                type="checkbox" defaultChecked={numberAllowed} id="numberInput"
                onChange={()=>{setNumberAllowed((prev)=> !prev)}} />
                <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input 
                type="checkbox" defaultChecked={symbolAllowed} id="numberInput"
                onChange={()=>{setSymbolAllowed((prev)=> !prev)}} />
                <label htmlFor="symbolInput">Characters</label>
            </div>

        </div>
    </div>
    </>
  )
}

export default Pass