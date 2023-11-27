import React from "react";
import {Breadcrumb} from "antd";
import {useRouter} from "next/navigation";

const CustomBreadcrumb = ({items}) => {
    const router = useRouter();
    const getBreadcrumbItemList = (items) => {
        return items.map((item, index) => ({
            title:
                index === items.length - 1 ? (
                    <span
                        onClick={() => router.refresh()}
                        className="text-black cursor-pointer capitalize"
                    >
            {item}
          </span>
                ) : (
                    <span className="transition-all duration-200 capitalize">{item}</span>
                ),
        }));
    };
    return <Breadcrumb items={getBreadcrumbItemList(items)}/>;
};

export default CustomBreadcrumb;
