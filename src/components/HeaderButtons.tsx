"use client"

import { GithubLogo, Sun } from "phosphor-react"

export const HeaderButtons = () => {
  return (
    <>
      <a href="https://github.com/OliveiraOS/genesis" target="_blank" className="p-3 rounded transition-colors hover:bg-zinc-600/50">
        <GithubLogo size={20} weight="bold" />
      </a>

      <button className="p-3 rounded transition-colors hover:bg-zinc-600/50">
        <Sun size={20} weight="bold" />
      </button>
    </>
  )
}