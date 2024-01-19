import type { TUser } from '../../../types/user';

interface IUSer {
  user: TUser;
  parentName: string;
}

function User({user, parentName}: IUSer): JSX.Element {
  const {name, avatarUrl, isPro} = user;

  return (
    <div className={`${parentName}__host-user user`}>
      <div className={`${parentName}__avatar-wrapper ${parentName}__avatar-wrapper--pro user__avatar-wrapper`}>
        <img
          className={`${parentName}__avatar user__avatar`}
          src={avatarUrl}
          width={74}
          height={74}
          alt="Host avatar"
        />
      </div>
      <span className={`${parentName}__user-name`}>{name}</span>
      <span className={`${parentName}__user-status`}>{isPro ? 'Pro' : ''}</span>
    </div>
  );
}

export default User;
