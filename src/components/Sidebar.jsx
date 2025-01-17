import { useState } from 'react'

const Sidebar = () => {
  const [price, setPrice] = useState(0);
  const [selectedRange, setSelectedRange] = useState('');

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setPrice(value);
    updateRadioButton(value);
  };

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedRange(value);
    updateSlider(value);
  };

  const updateRadioButton = (value) => {
    if (value < 20) {
      setSelectedRange('under-20');
    } else if (value >= 25 && value <= 100) {
      setSelectedRange('25-100');
    } else if (value > 100) {
      setSelectedRange('above-100');
    } else {
      setSelectedRange('');
    }
  };

  const updateSlider = (value) => {
    if (value === 'under-20') {
      setPrice(19);
    } else if (value === '25-100') {
      setPrice(25);
    } else if (value === 'above-100') {
      setPrice(101);
    }
  };

  return (
    <div className=" bg-white z-50">
      <div className="border-b border-[#E4E7E9]">
        <h3 className="uppercase font-normal text-[#1B1818] mb-4">category</h3>
        <label className="flex items-center mb-3">
          <input
            type="radio"
            name="gender"
            value="male"
            className="form-radio text-[#6A1B9A]"
          />
          <span className="ml-2 text-[#717171] font-light text-sm">Women</span>
        </label>

        <label className="flex items-center mb-3">
          <input
            type="radio"
            name="gender"
            value="male"
            className="form-radio text-[#6A1B9A]"
          />
          <span className="ml-2 text-[#717171] font-light text-sm">Men</span>
        </label>

        <label className="flex items-center mb-6">
          <input
            type="radio"
            name="gender"
            value="male"
            className="form-radio text-[#6A1B9A]"
          />
          <span className="ml-2 text-[#717171] font-light text-sm">Kids</span>
        </label>
      </div>

      <div className="border-b border-[#E4E7E9]">
       <h3 className="uppercase font-normal text-[#1B1818] mb-4 mt-6">size</h3>
        <div className="flex items-center gap-16">
          <div>
            <label className="flex items-center mb-3">
              <input
                type="radio"
                name="size"
                value="xs"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">XS</span>
            </label>

            <label className="flex items-center mb-3">
              <input
                type="radio"
                name="size"
                value="s"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">S</span>
            </label>

            <label className="flex items-center mb-6">
              <input
                type="radio"
                name="size"
                value="md"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">MD</span>
            </label>
          </div>

          <div>
            <label className="flex items-center mb-3">
              <input
                type="radio"
                name="size"
                value="l"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">L</span>
            </label>

            <label className="flex items-center mb-3">
              <input
                type="radio"
                name="size"
                value="xl"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">XL</span>
            </label>

            <label className="flex items-center mb-6">
              <input
                type="radio"
                name="size"
                value="xxl"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">XXL</span>
            </label>
          </div>
        </div>
      </div>

      <div className="border-b border-[#E4E7E9]">
        <h3 className="uppercase font-normal text-[#1B1818] mb-4 mt-6">price range</h3>
        <div className="flex items-center">
          <span className="mr-2 text-[#717171] text-xs">$20</span>
          <input
            type="range"
            min="0"
            max="150"
            value={price}
            onChange={handleSliderChange}
            className="w-[80%] h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-input"
          />
          <span className="ml-2 text-[#717171] text-xs">$1000</span>
        </div>
        <div className="mt-4">
          <label className="flex items-center mb-3">
            <input
              type="radio"
              name="price-range"
              value="under-20"
              checked={selectedRange === 'under-20'}
              onChange={handleRadioChange}
              className="form-radio text-[#6A1B9A]"
            />
            <span className="ml-2 text-[#717171] font-light text-sm">Under $20</span>
          </label>
          <label className="flex items-center mb-3">
            <input
              type="radio"
              name="price-range"
              value="25-100"
              checked={selectedRange === '25-100'}
              onChange={handleRadioChange}
              className="form-radio text-[#6A1B9A]"
            />
            <span className="ml-2 text-[#717171] font-light text-sm">$25 - $100</span>
          </label>
          <label className="flex items-center mb-6">
            <input
              type="radio"
              name="price-range"
              value="above-100"
              checked={selectedRange === 'above-100'}
              onChange={handleRadioChange}
              className="form-radio text-[#6A1B9A]"
            />
            <span className="ml-2 text-[#717171] font-light text-sm">$100 and above</span>
          </label>
        </div>
      </div>

      <div className="border-b border-[#E4E7E9]">
       <h3 className="uppercase font-normal text-[#1B1818] mb-4 mt-6">colour</h3>
        <div className="flex items-center gap-14">
          <div>
            <label className="flex items-center mb-3">
              <input
                type="radio"
                name="colour"
                value="red"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">Red</span>
            </label>

            <label className="flex items-center mb-3">
              <input
                type="radio"
                name="colour"
                value="blue"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">Blue</span>
            </label>

            <label className="flex items-center mb-3">
              <input
                type="radio"
                name="colour"
                value="white"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">White</span>
            </label>

            <label className="flex items-center mb-6">
              <input
                type="radio"
                name="colour"
                value="grey"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">Grey</span>
            </label>
          </div>

          <div>
            <label className="flex items-center mb-3">
              <input
                type="radio"
                name="colour"
                value="yellow"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">Yellow</span>
            </label>

            <label className="flex items-center mb-3">
              <input
                type="radio"
                name="colour"
                value="green"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">Green</span>
            </label>

            <label className="flex items-center mb-3">
              <input
                type="radio"
                name="colour"
                value="orange"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">Orange</span>
            </label>

            <label className="flex items-center mb-6">
              <input
                type="radio"
                name="colour"
                value="black"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">Black</span>
            </label>
          </div>
        </div>
      </div>

      <div className="">
       <h3 className="uppercase font-normal text-[#1B1818] mb-4 mt-6">popular brands</h3>
        <div className="flex items-center xl:gap-14 gap-6">
          <div>
            <label className="flex items-center mb-3">
              <input
                type="checkbox"
                name="brand"
                value="dior"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">Dior</span>
            </label>

            <label className="flex items-center mb-3">
              <input
                type="checkbox"
                name="brand"
                value="fendi"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">Fendi</span>
            </label>

            <label className="flex items-center mb-3">
              <input
                type="checkbox"
                name="brand"
                value="versace"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">Versace</span>
            </label>

            <label className="flex items-center mb-6">
              <input
                type="checkbox"
                name="brand"
                value="gucci"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">Gucci</span>
            </label>
          </div>

          <div>
            <label className="flex items-center mb-3">
              <input
                type="checkbox"
                name="brand"
                value="bonobos"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">Bonobos</span>
            </label>

            <label className="flex items-center mb-3">
              <input
                type="checkbox"
                name="brand"
                value="adidas"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">Adidas</span>
            </label>

            <label className="flex items-center mb-3">
              <input
                type="checkbox"
                name="brand"
                value="nike"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">Nike</span>
            </label>

            <label className="flex items-center mb-6">
              <input
                type="checkbox"
                name="brand"
                value="todd snyder"
                className="form-radio text-[#6A1B9A]"
              />
              <span className="ml-2 text-[#717171] font-light text-sm">Todd Synder</span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 lg:gap-5">
        <button className="uppercase px-6 py-2.5 lg:px-8 bg-white border border-[#6A1B9A] mt-3 rounded-custom-50 text-[#6A1B9A] 
          text-bold cursor-pointer hover:bg-[#6a1b9a] hover:text-white"
        >
          reset
        </button>
        <button className="uppercase px-6 py-2.5 lg:px-8 bg-[#6A1B9A] mt-3 border border-transparent rounded-custom-50 text-white 
          text-bold cursor-pointer hover:bg-white hover:border-[#6a1b9a] hover:text-[#6a1b9a]"
        >
          apply
        </button>
      </div>
    </div>
  )
}

export default Sidebar