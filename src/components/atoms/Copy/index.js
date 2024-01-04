'use client';

const Copy = ({children, ...props}) => {
  return (
    <button
    {...props}>
      {children}
    </button>
  )
}
export default Copy;