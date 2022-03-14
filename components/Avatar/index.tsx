const Avatar = ({ imageURL }: AvatarProps) => {
  return (
    <img
      loading="lazy"
      className="h-10 transform cursor-pointer rounded-full transition duration-100 hover:scale-110"
      alt="Profile Picture"
      src={imageURL}
    />
  )
}

export default Avatar
