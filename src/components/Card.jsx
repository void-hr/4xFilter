export default function Card(props) {
  const data = props.map(({ img, price, pname, address, date }) => {
    return (
      <div className="flex gap-32 justify-center flex-wrap w-full ">
        <div className="flex w-2/3 ">
          <div className="mt-10 rounded-md h-auto w-64  bg-white flex-col overflow-hidden">
            <img className="h-52 bg-contain " src={img} />
            <div className="flex items-center pt-2 pl-2">
              <p className="text-violet-500 text-2xl font-bold">{price}</p>
              <p className="text-slate-500 text-sm pt-1"> /month </p>
            </div>
            <h3 className="text-black font-semibold text-2xl pl-2">{pname}</h3>
            <p className="text-sm pl-2 text-slate-500">{address}</p>
            <div className="flex justify-center mt-2">
              <hr className="text-slate-100  w-11/12" />
            </div>
            <div className="flex justify-around text-xs m-2 text-slate-400">
              <p>2 beds</p>
              <p>3 bathrooms</p>
              <p>5x7m</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
