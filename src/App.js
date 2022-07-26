import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="text-blue-600 hover:text-red-300 underline">
          TESTING TAILWIND (plz work)
        </h1>
        Personal Site for Dhiraj Kuttichirayil
        <div class="max-w-sm overflow-hidden shadow-lg bg-slate-200 rounded-lg">
          <img
            class="w-full"
            src="https://medias.spotern.com/spots/w640/66/66561-1532336916.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
