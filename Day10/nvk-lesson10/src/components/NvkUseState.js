import React, { useState } from 'react'

function NvkUseState() {
    //
    const [NvkCount, setNvkCount] = useState(0);

    //
    const NvkArr = [10, 20, 30, 40];
    const [NvkArray, setNvkArray] = useState(NvkArr);

    //
    const NvkStudents = [
        { NvkId: "SV01", NvkName: "Vu Kien", NvkAge: 20 },
        { NvkId: "SV02", NvkName: "Vu kien 01", NvkAge: 202 },
    ];
    const [NvkStudentList, setNvkStudentList] = useState(NvkStudents);

    //
    const NvkHandleAddList = () => {
        setNvkArray([
            ...NvkArray,
            parseInt(Math.random() * 100),
        ])
    }

    //
    const NvkHandleAddNewStudent = () => {
        let NvkStudent = {
            NvkId: "SV003",
            NvkName: "Nguyen Vu Kien",
            NvkAge: 20

        };
        //
        setNvkStudentList([
            ...NvkStudentList,
            NvkStudent
        ])

        console.log("list:", NvkStudentList);
    }
    return (
        <div className='alert alert-danger'>
            <h2>useState Demo</h2>
            <div>
                <h3>Count: {NvkCount}</h3>
                <button onClick={() => setNvkCount(NvkCount + 1)}>Tang: + </button>
                <button onClick={() => setNvkCount(NvkCount - 1)}>Giam: - </button>
            </div>
            <div>
                <h3>Array: {NvkArray.toString()}</h3>
                <button onClick={NvkHandleAddList}>Them Phan Tu</button>
            </div>
            <div>
                <h3>Danh Sach Sinh Vien</h3>
                <table className='table table-bordered'>
                    <thead>
                        <tr >
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            NvkStudentList.map((NvkStudent, index) => {
                                return <>
                                    <tr>
                                        <td>{NvkStudent.NvkId}</td>
                                        <td>{NvkStudent.NvkName}</td>
                                        <td>{NvkStudent.NvkAge}</td>
                                    </tr>
                                </>
                            })
                        }
                    </tbody>
                    <tfoot>
                        <button onClick={NvkHandleAddNewStudent}>
                            them moi
                        </button>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default NvkUseState