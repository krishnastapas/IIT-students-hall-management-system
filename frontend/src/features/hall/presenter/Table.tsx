import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdCancel, MdCheckCircle } from 'react-icons/md'
import { useUserAuth } from '../../context/UserAuthContext'
import { HiOutlinePencil, HiArchive } from "react-icons/hi";
import { confirmationMessage } from '../../../utils/alert'
import { getUserRole } from '../../auth/authRoles'
import { HallInterface } from '../Model';
import { deleteHallApi } from '../repository';
function Table(props: {
    fetchHallList: () => void
    // totalNoOfhall: number,
    hallList: HallInterface[],
    // pageNo: number,
    // limit: number,
    // changePage: (value: number) => void
    handleEditButton: (hall: HallInterface) => void
    // handleShowQuestionButton: (hall: HallInterface) => void
}) {
    const navigate = useNavigate();
    const { user } = useUserAuth()
    const [showFilterOption, setShowFilterOption] = useState(false);
    const [siteFilter, setSiteFilter] = useState("all")



    // let count = props.totalNoOfhall / props.limit;
    // const arrayNos = []
    // for (let i = 0; i < count; i++) {
    //     arrayNos.push(i + 1)
    // }
    const onClickDelete = async (hall: HallInterface) => {
        const flag = await confirmationMessage("Do you really want to delete the hall details ?");
        if (flag) {

            const data = await deleteHallApi(hall._id ?? "");
            if (data) {
                props.fetchHallList()
            }
        }
    }


    return (
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-10 py-3">Name</th>
                            <th scope="col" className="px-2 py-3">Details</th>
                            {/* <th scope="col" className="px-2 py-3">Active</th> */}
                            {user.operation == "show" ? "" :
                                <th scope="col" className="px-2 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>}
                            {user.operation == "show-edit" || user.operation == "show" ? "" :

                                <th scope="col" className="px-2 py-3">
                                    <span className="sr-only">Delete</span>
                                </th>}
                        </tr>
                    </thead>
                    <tbody>
                        {props.hallList.map((hall: HallInterface, index: number) => {
                            return (
                                <tr className="border-b dark:border-gray-700">
                                    <th scope="row" className="px-10 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{hall.name}</th>


                                    <td className="px-2 py-3">

                                        <button
                                                    type="button"
                                                    onClick={() => {
                                                        const link = getUserRole({ user: user })
                                                        navigate("/" + link + "/hall-management/" + hall._id)
                                                    }}
                                                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900">
                                                    See Details</button>
                                    </td>


                                    {/* <td className="px-4 py-3 ">


                                        <button
                                            type="button"
                                            onClick={() => {
                                                // const link = getUserRole({ user: user })
                                                // navigate("/" + link + "/hall-management/add-question/" + hall._id+"/"+hall.omrId)
                                            }}
                                            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900">
                                            
                                        </button>

                                    </td> */}

                                    {/* <td className="px-4 py-3 ">


                                        <button
                                            type="button"
                                            disabled={!hall.active}
                                            onClick={() => {
                                                props.handleShowQuestionButton(hall)
                                            }}
                                            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900">Show Question Paper</button>

                                    </td> */}
                                    <td className="px-4 py-3 flex items-center justify-end">
                                        {/* <label className="relative inline-flex items-center mr-5 cursor-pointer">
                                            <input className={`rounded-full text-xl sr-only peer`} type="checkbox" value="" checked />
                                            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div> */}
                                        {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Act</span> */}
                                        {/* </label> */}
                                        {user.operation == "show" ? "" :
                                            <>
                                                <div className={`rounded-full text-xl cursor-pointer m-5`} onClick={() => {
                                                    props.handleEditButton(hall)
                                                }}>

                                                    <HiOutlinePencil />
                                                </div>
                                                {/* <button
                                                    type="button"
                                                    onClick={() => {
                                                        // const link = getUserRole({ user: user })
                                                        // navigate("/" + link + "/hall-list/edit/" + hall.id)
                                                    }}
                                                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900">Edit</button> */}
                                            </>}
                                        {user.operation == "show-edit" || user.operation == "show" ? "" :
                                            <>
                                                <div className={`rounded-full text-xl cursor-pointer m-5`} onClick={() => {
                                                    onClickDelete(hall)

                                                }}>

                                                    <HiArchive />
                                                </div>
                                                {/* <button
                                                    type="button"
                                                    onClick={() => {
                                                        onClickDelete(hall)
                                                    }}
                                                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button> */}

                                            </>
                                        }
                                    </td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
            {/* <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Showing
                    <span className="font-semibold text-gray-900 dark:text-white">{props.totalNoOfhall ? props.limit * (props.pageNo - 1) + 1 : 0}-{(props.limit * (props.pageNo)) > props.totalNoOfhall ? props.totalNoOfhall : (props.limit * (props.pageNo))}</span>
                    of
                    <span className="font-semibold text-gray-900 dark:text-white">{props.totalNoOfhall}</span>
                </span>
                <ul className="inline-flex items-stretch -space-x-px">
                    {/* privious */}
            {/* <li>
                        <a href="#"
                            onClick={() => {
                                if (props.pageNo != 1)
                                    props.changePage(props.pageNo - 1)
                            }}
                            className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li> */}
            {/* numbers */}
            {/* {arrayNos.map((ele) => (

                        <li>
                            <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{ele}</a>
                        </li>
                    ))} */}

            {/* <div className="md:col-span-5">
                        <select
                            name="pathfinder_center"
                            id="pathfinder_center"
                            className="h-10 border  rounded px-4 w-full bg-gray-50"
                            value={props.pageNo}
                            onChange={(e) => {
                                props.changePage(parseInt(e.target.value))
                                console.log("value", e.target.value)
                            }}
                        >

                            {arrayNos.length ? arrayNos.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            )) :
                                <option >
                                    0
                                </option>}
                        </select>
                    </div> */}

            {/* next */}
            {/* <li>
                        <a href="#"
                            onClick={() => {
                                if (props.pageNo != Math.ceil(props.totalNoOfhall / props.limit))
                                    props.changePage(props.pageNo + 1)
                            }}
                            className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>  */}
        </div>

    )
}

export default Table


