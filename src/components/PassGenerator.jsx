import React, { useState } from 'react'
import { UC, LC, NC, SC } from '../data/PassChars'

export default function PassGenerator() {

    let [uppercase, setUpperCase] = useState(false);
    let [lowercase, setLowerCase] = useState(false);
    let [numbers, setNumbers] = useState(false);
    let [specialSymbols, setSpecialSymbols] = useState(false);
    let [passLength, setPassLength] = useState(8);
    let [finalpass, setFinalPass] = useState('')

    let generatePassword = () => {
        let finalPass = ''
        let charSet = ''
        if (uppercase || lowercase || numbers || specialSymbols) {
            if (uppercase) charSet += UC
            if (lowercase) charSet += LC
            if (numbers) charSet += NC
            if (specialSymbols) charSet += SC
            for (let i = 0; i < passLength; i++) {
                finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length))
            }
            setFinalPass(finalPass)
        }
        else {
            alert("Please select at least one option")
        }
    }

    return (
        <>
            <div className='passwordBox'>
                <h2>Password Generator</h2>
                <div className='passwordBoxIn'>
                    <input type='text' value={finalpass} readOnly /> <button>Copy</button>
                </div>
                <div className='passLength'>
                    <label>Password Length</label>
                    <input type='number' onKeyDown={(e) => e.preventDefault()} min={5} max={20} value={passLength} onChange={(event) => setPassLength(event.target.value)} />
                </div>
                <div className='passLength'>
                    <label>Include UpperCase</label>
                    <input type='checkbox' checked={uppercase} onChange={() => setUpperCase(!uppercase)} />
                </div>
                <div className='passLength'>
                    <label>Include LowerCase</label>
                    <input type='checkbox' checked={lowercase} onChange={() => setLowerCase(!lowercase)} />
                </div>
                <div className='passLength'>
                    <label>Include Numbers</label>
                    <input type='checkbox' checked={numbers} onChange={() => setNumbers(!numbers)} />
                </div>
                <div className='passLength'>
                    <label>Include Special Characters</label>
                    <input type='checkbox' checked={specialSymbols} onChange={() => setSpecialSymbols(!specialSymbols)} />
                </div>
                <button className='btn' onClick={generatePassword}>Generate Password</button>
            </div>
        </>
    )
}    
