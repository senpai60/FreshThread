import {LogOut} from 'lucide-react'
function LeftNav() {
  return (
    <aside className="relative w-64 bg-zinc-950 border-r border-zinc-800 p-4 hidden md:flex flex-col pt-30 px-10">
      <h2 className="text-lg font-semibold mb-4 text-gray-200">Categories</h2>
      <ul className="space-y-2">
        <li className="hover:bg-zinc-800 p-2 rounded cursor-pointer">
          Frontend
        </li>
        <li className="hover:bg-zinc-800 p-2 rounded cursor-pointer">
          Backend
        </li>
        <li className="hover:bg-zinc-800 p-2 rounded cursor-pointer">
          AI & ML
        </li>
        <li className="hover:bg-zinc-800 p-2 rounded cursor-pointer">DevOps</li>
        <li className="hover:bg-zinc-800 p-2 rounded cursor-pointer">
          Game Dev
        </li>
      </ul>
      <button className="w-full bg-zinc-900 py-2 rounded absolute left-0 bottom-0">
        Logout <LogOut className='inline ml-2' size={20}/>
      </button>
    </aside>
  );
}

export default LeftNav;
