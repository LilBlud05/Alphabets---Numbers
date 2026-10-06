import "./App.css";

function App() {
  return (
    <>
      <div className="w-[50%] ml-auto mr-auto mt-7 mb-auto h-full flex border-2 border-blue-100 rounded-2xl shadow-2xl shadow-blue-400 font-serif">
        {/* Alphabets */}
        <div className="flex-1 bg-blue-100 border-r-2 border-blue-200 rounded-tr-none rounded-br-none rounded-2xl ">
          <h2 className="pt-4 pb-2 font-bold flex flex-rol justify-center">
            ALPHABETS
          </h2>
          <div className="m-5">
            <div className="flex flex-row">
              <div className="flex-6 flex justify-center bg-lime-400 p-5 rounded-tl-2xl transition duration-100 hover:scale-110">
                A
              </div>
              <div className="flex-2 flex justify-center bg-mauve-400 p-5 transition duration-100 hover:scale-110">
                B
              </div>
              <div className="flex-4 flex justify-center bg-sky-400 p-5 transition duration-100 hover:scale-110">
                C
              </div>
              <div className="flex-8 flex justify-center bg-pink-400 p-5 transition duration-100 hover:scale-110">
                D
              </div>
              <div className="flex-3 flex justify-center bg-taupe-400 p-5 rounded-tr-2xl transition duration-100 hover:scale-110">
                E
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-2 flex justify-center bg-olive-500 p-5 transition duration-100 hover:scale-110">
                F
              </div>
              <div className="flex-7 flex justify-center bg-violet-500 p-5 transition duration-100 hover:scale-110">
                G
              </div>
              <div className="flex-9 flex justify-center bg-purple-400 p-5 transition duration-100 hover:scale-110">
                H
              </div>
              <div className="flex-3 flex justify-center bg-emerald-400 p-5 transition duration-100 hover:scale-110">
                I
              </div>
              <div className="flex-5 flex justify-center bg-sky-400 p-5 transition duration-100 hover:scale-110">
                J
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-7 flex justify-center bg-pink-400 p-5 transition duration-100 hover:scale-110">
                K
              </div>
              <div className="flex-1 flex justify-center bg-sky-400 p-5 transition duration-100 hover:scale-110">
                L
              </div>
              <div className="flex-4 flex justify-center bg-olive-400 p-5 transition duration-100 hover:scale-110">
                M
              </div>
              <div className="flex-3 flex justify-center bg-emerald-400 p-5 transition duration-100 hover:scale-110">
                N
              </div>
              <div className="flex-8 flex justify-center bg-taupe-400 p-5 transition duration-100 hover:scale-110">
                O
              </div>
              <div className="flex-6 flex justify-center bg-lime-400 p-5 transition duration-100 hover:scale-110">
                P
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-12 flex justify-center bg-violet-400 p-5 transition duration-100 hover:scale-110">
                Q
              </div>
              <div className="flex-6 flex justify-center bg-mauve-400 p-5 transition duration-100 hover:scale-110">
                R
              </div>
              <div className="flex-7 flex justify-center bg-purple-400 p-5 transition duration-100 hover:scale-110">
                S
              </div>
              <div className="flex-6 flex justify-center bg-pink-400 p-5 transition duration-100 hover:scale-110">
                T
              </div>
              <div className="flex-8 flex justify-center bg-sky-400 p-5 transition duration-100 hover:scale-110">
                U
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-11 flex justify-center bg-emerald-400 p-5 rounded-bl-2xl transition duration-100 hover:scale-110">
                V
              </div>
              <div className="flex-8 flex justify-center bg-lime-400 p-5 transition duration-100 hover:scale-110">
                W
              </div>
              <div className="flex-4 flex justify-center bg-olive-500 p-5 transition duration-100 hover:scale-110">
                X
              </div>
              <div className="flex-7 flex justify-center bg-taupe-400 p-5 transition duration-100 hover:scale-110">
                Y
              </div>
              <div className="flex-10 flex justify-center bg-purple-400 p-5 rounded-br-2xl transition duration-100 hover:scale-110">
                Z
              </div>
            </div>
          </div>
        </div>
        {/* Numbers */}
        <div className="flex-1 bg-blue-100 rounded-tl-none rounded-bl-none rounded-2xl">
          <h2 className="pt-4 pb-2 font-bold flex flex-rol justify-center">
            NUMBERS
          </h2>
          <div className="m-5">
            <div className="flex flex-row">
              <div className="flex-4 flex justify-center bg-yellow-400 p-5 rounded-tl-2xl transition duration-100 hover:scale-110">
                1
              </div>
              <div className="flex-5 flex justify-center bg-blue-400 p-5 transition duration-100 hover:scale-110">
                2
              </div>
              <div className="flex-2 flex justify-center bg-green-400 p-5 transition duration-100 hover:scale-110">
                3
              </div>
              <div className="flex-6 flex justify-center bg-mist-400 p-5 rounded-tr-2xl transition duration-100 hover:scale-110">
                4
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-2 flex justify-center bg-red-400 p-5 transition duration-100 hover:scale-110">
                5
              </div>
              <div className="flex-4 flex justify-center bg-cyan-400 p-5 transition duration-100 hover:scale-110">
                6
              </div>
              <div className="flex-7 flex justify-center bg-orange-400 p-5 transition duration-100 hover:scale-110">
                7
              </div>
              <div className="flex-3 flex justify-center bg-fuchsia-400 p-5 transition duration-100 hover:scale-110">
                8
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-9 flex justify-center bg-green-400 p-5 transition duration-100 hover:scale-110">
                9
              </div>
              <div className="flex-7 flex justify-center bg-mist-400 p-5 transition duration-100 hover:scale-110">
                10
              </div>
              <div className="flex-4 flex justify-center bg-yellow-400 p-5 transition duration-100 hover:scale-110">
                11
              </div>
              <div className="flex-5 flex justify-center bg-blue-400 p-5 transition duration-100 hover:scale-110">
                12
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-6 flex justify-center bg-fuchsia-400 p-5 transition duration-100 hover:scale-110">
                13
              </div>
              <div className="flex-5 flex justify-center bg-red-400 p-5 transition duration-100 hover:scale-110">
                14
              </div>
              <div className="flex-8 flex justify-center bg-cyan-400 p-5 transition duration-100 hover:scale-110">
                15
              </div>
              <div className="flex-6 flex justify-center bg-orange-400 p-5 transition duration-100 hover:scale-110">
                16
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-4 flex justify-center bg-blue-400 p-5 rounded-bl-2xl transition duration-100 hover:scale-110">
                17
              </div>
              <div className="flex-6 flex justify-center bg-yellow-400 p-5 transition duration-100 hover:scale-110">
                18
              </div>
              <div className="flex-1 flex justify-center bg-blue-400 p-5 transition duration-100 hover:scale-110">
                19
              </div>
              <div className="flex-3 flex justify-center bg-mist-400 p-5 rounded-br-2xl transition duration-100 hover:scale-110">
                20
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
