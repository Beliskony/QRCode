import { QRCodeSVG } from 'qrcode.react'
import React from 'react'

interface QrCodeRedirectProps{
    url?: string
    crea?: string
}

const Qr: React.FC<QrCodeRedirectProps> = ({url, crea}) => {

  return (
    <div className='justify-center items-center w-96 h-96 flex flex-col'>
        {url && !crea ? (
         <>
            <a>
                <QRCodeSVG value={`${url}`} size={200} />
            </a>

            <div className='justify-center text-center w-full mt-3 gap-y-2 flex flex-col'>
                <h3 className='text-xs'>ou</h3>
                <a className='text-xl font-bold' href={url} target='_blank' rel="noopener noreferrer">
                    cliquez ici
                </a>
            </div>
         </>
        ) : crea ? (
          <>
            <a href={`${crea}`} target='_blank' rel="noopener noreferrer">
               <QRCodeSVG value={`${crea}`} size={200} />
            </a>

            <div className='justify-center text-center w-full mt-3 gap-y-2 flex flex-col'>
                <h3 className='text-xs'>ou</h3>
                <a className='text-xl font-bold' href={crea} target='_blank' rel="noopener noreferrer">
                    cliquez ici
                </a>
            </div>
          </>
        ) : (
            <QRCodeSVG value="https://facebook.com" size={200}/>
        ) }
    
    </div>
    )
}

export default Qr