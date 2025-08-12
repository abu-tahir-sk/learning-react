const Link = ({rout}) => {
      return (
            <li className="mr-10 list-none px-5 hover:bg-yellow-700">
                  <a className=""  href={rout.path}>{rout.name}</a>
            </li>
      );
};

export default Link;