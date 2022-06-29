import React, { useState } from 'react'
import useDebounce from './useDebounce'

const Template = () => {

  // states
  const [inputValue, setInputValue] = useState('')
  const { debouncedValue } = useDebounce(inputValue)

  return (

    <div>
      <input
        className="
          focus:ring-indigo-500
          focus:border-indigo-500
          block
          w-full
          rounded-md
          sm:text-sm
          border
          border-gray-300
          px-3
          py-2
        "
        placeholder="original value here"
        onChange={evt => setInputValue(evt.target.value)} value={inputValue}
      />
      <div>{debouncedValue}</div>
    </div>
  )

}

export const Primary = Template.bind({});
Primary.args = {
  children: 'wkwkw tes'
};

export default {
  title: 'Example/useDebounce'
};