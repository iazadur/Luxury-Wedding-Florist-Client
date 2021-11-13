import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
import AddReview from '../AddReview/AddReview';
import AllReview from '../ManageReview/ManageReview';

const Review = () => {

    const [allReview, setAllReview] = useState([]);
    const [load, setLoad] = useState(false)



    useEffect(() => {
        axios.get('https://boiling-temple-62751.herokuapp.com/review')
            .then(res => {
                setAllReview(res.data)
            })
    }, [load])



    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`https://boiling-temple-62751.herokuapp.com/review/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {

                                const remainingProducts = allReview.filter(user => user._id !== id);
                                setAllReview(remainingProducts);
                                Swal.fire({
                                    title: 'Deleted!',
                                    text: 'Your file has been deleted.',
                                    icon: 'success',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }
    return (
        <>
            <AddReview setLoad={setLoad} load={load} />
            <AllReview review={allReview} handleDelete={handleDelete} />
        </>
    );
};

export default Review;