import { createContext, useContext, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { ArrowUpRight, Check, Copy, X } from 'lucide-react'
import { getWhatsAppMessage, getWhatsAppUrl, isWhatsAppConfigured } from '../config/store'

export function WhatsAppIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
    <path d="M20.8 11.7a8.8 8.8 0 0 1-13 7.75L3 21l1.55-4.7A8.8 8.8 0 1 1 20.8 11.7Z" />
    <path d="M8.1 7.5c-.5 0-.9.7-.9 1.3 0 2.7 3.2 5.9 5.9 5.9.7 0 1.6-.5 1.7-1.1l.1-.7-2-1-.8.9a6.8 6.8 0 0 1-2.7-2.6l.7-.9-.9-1.8Z" />
  </svg>
}

const WhatsAppContext = createContext<(message: string) => void>(() => {})

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)

  useEffect(() => {
    if (message) dialog.current?.showModal()
  }, [message])

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
      setCopyError(false)
    } catch { setCopyError(true) }
  }

  return <WhatsAppContext.Provider value={(text) => { setCopied(false); setCopyError(false); setMessage(text) }}>
    {children}
    <dialog ref={dialog} className="contact-dialog" aria-labelledby="contact-title" aria-describedby="contact-description" onClose={() => setMessage('')} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close() }}>
      <div className="dialog-body">
        <button className="icon-button dialog-close" aria-label="Cerrar" onClick={() => dialog.current?.close()} autoFocus><X size={21} /></button>
        <span className="dialog-icon"><WhatsAppIcon size={30} /></span>
        <p className="eyebrow">TU PRÓXIMO ANTOJO</p>
        <h2 id="contact-title">Pronto estaremos<br />a un mensaje.</h2>
        <p id="contact-description">El número de WhatsApp está pendiente de confirmar. Puedes copiar tu consulta y guardarla para después.</p>
        <p className="message-preview">{message}</p>
        <button className="button button-primary w-full" onClick={copyMessage}>{copied ? <Check size={18} /> : <Copy size={18} />}{copied ? 'Consulta copiada' : 'Copiar mi consulta'}</button>
        <p className="copy-status" role="status">{copied ? 'Tu mensaje ya está listo para pegar.' : copyError ? 'Selecciona el texto de arriba para copiar tu consulta.' : ''}</p>
      </div>
    </dialog>
  </WhatsAppContext.Provider>
}

export function WhatsAppLink({ productName, children = 'Pedir por WhatsApp', className = 'button button-primary', arrow = false, label }: { productName?: string; children?: ReactNode; className?: string; arrow?: boolean; label?: string }) {
  const showPendingContact = useContext(WhatsAppContext)
  return <a href={getWhatsAppUrl(productName)} target="_blank" rel="noopener noreferrer" className={className} aria-label={label || (productName ? `Pedir chocolate de ${productName} por WhatsApp` : undefined)} onClick={(event) => {
    if (!isWhatsAppConfigured) {
      event.preventDefault()
      showPendingContact(getWhatsAppMessage(productName))
    }
  }}>
    <WhatsAppIcon size={19} />{children}{arrow && <ArrowUpRight size={17} className="link-arrow" />}
  </a>
}

export function WhatsAppFloatingButton() {
  return <WhatsAppLink className="whatsapp-float" label="Consultar o pedir por WhatsApp"><span className="float-label">¿Un antojo?</span></WhatsAppLink>
}
