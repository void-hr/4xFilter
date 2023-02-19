export default function Navbar() {
  return (
    <div className="h-20 w-full bg-white lg:flex pl-24 items-center font-mono shadow-sm ">
      <span className="mr-24 text-2xl">Estatery</span>
      <div className="flex gap-10 ">
        <span className="hover:rounded-md  ">Rent</span>
        <span>Buy</span>
        <span>Sell</span>
      </div>
      <div className="px-10 flex">
        <label className="">ManageProperty</label>
        <select className="bg-white" name="">
          Manage Property
        </select>
        <label className="pl-10">Resources</label>
        <select className=" bg-white" name="Manage Property">
          Manage Property
        </select>
      </div>
      <div className="flex justify-end w-full pr-24 gap-2   ">
        <button className="rounded-md text-violet-600 border-violet-600 border-2 w-20 h-12">
          Login
        </button>
        <button className="rounded-md bg-violet-600 text-white w-20 h-12">
          Sign Up
        </button>
      </div>
    </div>
  );
}
