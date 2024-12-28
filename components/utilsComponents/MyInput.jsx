import React from 'react'

const MyInput = ({className}) => {
  return (
    <div className="mb-4 group relative">
    <input
        type="text"
        name="name"
        id="name"
        value={student.name}
        onChange={handleChange}
        required
        className="peer block w-full appearance-none border-b border-gray-300 bg-transparent  pt-5 pb-2 text-gray-900  focus:outline-none "
        placeholder=" "
      />
      <label
        htmlFor="name"
                  className="absolute text-1xl -top-1 text-zinc-500  transform scale-100 origin-[0] transition-all duration-200 ease-in-out translate-y-7 peer-focus:translate-y-0 
                  peer-focus:text-red-500 peer-focus:scale-90 peer-[&:not(:placeholder-shown)]:translate-y-0  peer-[&:not(:placeholder-shown)]:text-red-500 peer-[&:not(:placeholder-shown)]:scale-90" >
        Name
      </label>
    </div>
  )
}

export default MyInput