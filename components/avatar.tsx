type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" alt={name} />
      <div className="sm:font-bold w-20 ml-5">{name}</div>
    </div>
  )
}

export default Avatar
