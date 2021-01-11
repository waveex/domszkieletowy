import * as React from "react"

const Hero = () => {
    return (

        <div className="relative bg-gray-50 overflow-hidden">
          <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
            <div className="relative h-full max-w-7xl mx-auto">
          </div>
          </div>
        
          <div className="relative pt-6 pb-16 sm:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button type="button" className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" id="main-menu" aria-haspopup="true">
                        <span className="sr-only">Open main menu</span>
                </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:space-x-10">
                  <a href="#" className="font-medium text-gray-500 hover:text-korsi">Product</a>
        
                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Features</a>
        
                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>
        
                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Company</a>
                </div>
                <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                  <span className="inline-flex rounded-md shadow">
                    <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                      Log in
                    </a>
                  </span>
                </div>
              </nav>
            </div>
        
            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
                  </div>
                  <div className="-mr-2">
                    <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                  </button>
                  </div>
                </div>
                <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                  <div className="px-2 pt-2 pb-3" role="none">
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Product</a>
        
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Features</a>
        
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Marketplace</a>
        
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Company</a>
                  </div>
                  <div role="none">
                    <a href="#" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100" role="menuitem">
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
        
            <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Data to enrich your</span>
                  <span className="block text-indigo-600 xl:inline">online business</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                  <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
    )
}

export default Hero;
