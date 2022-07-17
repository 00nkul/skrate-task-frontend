import { useEffect } from 'react'
import { Card, Row, Col, Badge } from 'react-bootstrap'
import userImg from './user.jpg'

interface ISmallCardProps {
    role: string,
    organization_name: string,
    location: string,
    date_posted: string
}
interface IProps {
    jobsData: any
}
function JobsCard({ jobsData }: IProps) {
    return (
        <>
            <Card bg='light' className='mt-2'>
                <Card.Body>
                    <Card.Title className='text-start'>New Jobs</Card.Title>
                    {
                        jobsData.map((data: any , index:number) => {
                            return <SmallCard key={index} role={data.role} organization_name={data.organization_name} location={data.location} date_posted={data.date_posted}  />
                        })
                    }
                </Card.Body>
            </Card>
        </>
    )
}

export default JobsCard


function SmallCard({ role , organization_name , location , date_posted}: ISmallCardProps) {

    return (
        <>
            <Card className='mt-2'>
                <Card.Body>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div>
                            <p>{role}</p>
                            <p>{organization_name}</p>
                            <p>{location}</p>
                        </div>
                        <Badge>{date_posted}</Badge>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}