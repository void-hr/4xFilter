export default function Filter() {
  return (
    <div className="flex justify-center w-full  ">
      <div className="h-24 bg-white mt-12  justify-center w-4/6 flex items-center gap-20 rounded-xl relative">
        <div className="flex flex-col">
          <label className="text-slate-500">Location</label>
          <select className="h-12 m-0 p-0 w-32 bg-white" />
        </div>

        <div className="flex flex-col ">
          <label className="text-slate-500">Date</label>
          <input type="date" className="h-12  w-32  bg-white" />
        </div>

        <div className="flex flex-col ">
          <label className="text-slate-500">Price</label>
          <select className="h-12 m-0 p-0 w-32 font-semibold bg-white">
            <option type="range" value="10-500">
              $10-$500
            </option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-slate-500">Property Type</label>
          <select className="h-12 m-0 p-0  bg-white w-32 " />
        </div>
        <button className="bg-violet-600 rounded-md text-white h-12 w-24">
          Check
        </button>
      </div>
    </div>
  );
}
