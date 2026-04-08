"use client";

const PersonalInfo = () => {
  return (
    <form className="flex flex-col gap-5">
      {/* Age */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-300">Age</label>
        <input
          type="number"
          name="age"
          min={10}
          max={100}
          placeholder="Enter your age"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-100 placeholder-gray-500 outline-none transition focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40
          [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
      </div>

      {/* Gender */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-300">Gender</label>
        <select
          name="gender"
          defaultValue=""
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-100 outline-none transition focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40"
        >
          <option value="" disabled>
            Select your gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      {/* Country */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-300">Country</label>
        <input
          type="text"
          name="country"
          placeholder="Enter your country"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-100 placeholder-gray-500 outline-none transition focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40"
        />
      </div>
    </form>
  );
};

export default PersonalInfo;
