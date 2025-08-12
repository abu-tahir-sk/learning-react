const Link = ({rout}) => {
      return (
            <li className="mr-10 list-none">
                  <a className=""  href={rout.path}>{rout.name}</a>
            </li>
      );
};

export default Link;