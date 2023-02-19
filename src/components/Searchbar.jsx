export default function Searchbar() {
  return (
    <div className="flex mt-20 justify-around static ">
      <h1 className="text-3xl pl-2">Search Properties To Rent</h1>
      <input
        className="pl-2 text-xs font-semibold mr-2 border-2 rounded-md border-slate-200"
        type="search"
        placeholder="Search with searchbar"
      ></input>
    </div>
  );
}
