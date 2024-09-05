import { UserType } from "../../types/post.type";

function UserModalContents({ user }: { user: UserType }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <h3 className="font-bold text-3xl">{user.username}</h3>
      <div>
        <img
          className="w-32 h-32 rounded-full"
          src={`https://i.pravatar.cc/300?img=${user.id}`}
          alt={user.username}
        />
      </div>
      <p>🖐️ Hi, my name is {user.name}</p>
      <div className="w-[calc(100%-4px)] h-0 mx-auto border border-slate-200"></div>
      <ul className="w-full">
        <li>📧 {user.email}</li>
        <li>
          🏠 {user.address.street} {user.address.city}
        </li>
        <li>📞 {user.phone}</li>
        <li>🏢 {user.company.name}</li>
      </ul>
      <a className="text-blue-500 underline" href={`https://${user.website}`}>
        https://{user.website}
      </a>
    </div>
  );
}

export default UserModalContents;
