import React, { Suspense, useEffect, useMemo } from "react";
import { useLocation, useOutletContext } from "react-router-dom";

interface LazyRouteProps {
  children: React.ReactNode;
  title?: string;
	options?: Ioptions;
}
interface Ioptions {
  [key: string]: any;
}

const LazyRoute: React.FC<LazyRouteProps> = (props) => {
	const [, setRouteProps] = useOutletContext() as Array<any>;
	const [loding, setLoding] = React.useState(true);
	const { state = {} } = useLocation() as {
		state: {} | null;
  };
	const title = useMemo(() => {
    if (!props.title) return "";
    return decodeURIComponent(props.title);
  }, [props.title]);
  
	const options: Ioptions = useMemo(() => {
    if (!props.options)
      return {
        ...state,
      };
    return Object.assign({}, state, props.options);
  }, [props.options]);
  useEffect(() => {
    if (options) {
      setRouteProps({
        ...options,
        title,
      });
    }
    // 页面title修改
    document.title = title;
    // 显示页面
    setLoding(false);
  }, [options, title]);

  const getDecoratedChildren = () => {
    return React.Children.map(props.children, (child: any) => {
			return React.cloneElement(child, { ...options, setRouteProps });
    });
  };
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            fontSize: "1rem",
          }}
        >
          Loading...
        </div>
      }
    >
      { !loding && getDecoratedChildren()}
    </Suspense>
  );
};

export default LazyRoute;
