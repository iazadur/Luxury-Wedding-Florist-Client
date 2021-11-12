import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
import AddReview from '../AddReview/AddReview';
import AllReview from '../ManageReview/ManageReview';
import useAuth from '../../../../Hooks/useAuth';

const Review = () => {
    const { user } = useAuth()
    const [review, setReview] = useState({});
    const [allReview, setAllReview] = useState([]);
    const [load,setLoad] = useState(false)

    const handleChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...review }
        newLoginData[field] = value
        setReview(newLoginData)
    };

    const addReview = (e) => {
        review.date = new Date().toDateString()
        review.name = user.displayName
        review.img = user.photoURL

        axios.post('http://localhost:5000/review', review)
            .then(res => {
                setReview({})
                setLoad(!load)
                Swal.fire({
                    icon: 'success',
                    title: 'Product Added Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
        e.preventDefault()
    }
    useEffect(() => {
        axios.get('http://localhost:5000/review')
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
                    axios.delete(`http://localhost:5000/review/${id}`)
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
            <AddReview addReview={addReview} review={review} handleChange={handleChange} />
            <AllReview review={allReview} handleDelete={handleDelete} />
        </>
    );
};

export default Review;