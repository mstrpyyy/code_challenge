'use client'

import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function Modal1({ name, type, origin, notes, taste, roast, modalimage }: { name: string, type: string, origin: string, notes: string, taste: string, roast: string, modalimage: StaticImageData }) {
  const showModal = () => {
    const modal = document.getElementById('my_modal_4');
    if (modal instanceof HTMLDialogElement) {
        modal.showModal();
    }
};

  return (
      <div>
          <button className="btn bg-blue1 text-xwhite" onClick={showModal}>Details</button>
          <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-3xl flex justify-center gap-5">
                  <Image src={modalimage} alt='aceh gayo' className=' hidden md:flex w-[20rem] h-[26rem] rounded-3xl' />
                  <div className='flex flex-col justify-between'>
                      <h3 className="font-bold text-lg text-blue2 pb-2 pt-10  md:pt-20">{name}</h3>
                      <p className="py-1 text-xwhite">{type}</p>
                      <p className="py-1 text-xwhite">{origin}</p>
                      <p className="py-1 text-xwhite">{notes}</p>
                      <p className="py-1 text-xwhite">{taste}</p>
                      <p className="py-1 text-xwhite">{roast}</p>
                      <div className="modal-action">
                          <form method="dialog">
                              <button className="btn bg-blue1 text-xwhite">Close</button>
                          </form>
                      </div>
                  </div>

              </div>
          </dialog>
      </div>
  )
}