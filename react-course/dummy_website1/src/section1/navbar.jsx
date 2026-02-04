function NavBar() {
  return (
    <div className="bg-white flex items-center justify-between gap-2 py-4 px-4 sm:px-8 md:px-12 lg:px-16">
      <h3 className="bg-black text-white px-2 sm:px-3 py-2 rounded-full uppercase text-xs whitespace-nowrap">target audience</h3>
      <button className="uppercase bg-neutral-200 flex items-center gap-1 sm:gap-2 py-1 px-2 sm:px-3 rounded-full cursor-pointer text-xs whitespace-nowrap" >
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvcm5lci1kb3duLXJpZ2h0LWljb24gbHVjaWRlLWNvcm5lci1kb3duLXJpZ2h0Ij48cGF0aCBkPSJtMTUgMTAgNSA1LTUgNSIvPjxwYXRoIGQ9Ik00IDR2N2E0IDQgMCAwIDAgNCA0aDEyIi8+PC9zdmc+" className="w-4 h-4"/>
        <span>digital banking</span>
      </button>
    </div>
  )
}

export default NavBar