import { useEffect } from 'react'
import { Card, Row, Col, Badge } from 'react-bootstrap'
import userImg from './user.jpg'

interface ISmallCardProps {
    mentor_name: string,
    timings: string,
    date: string,
    session_type: string,
}
interface IProps {
    SessionData: any
}
function SessionsCard({ SessionData }: IProps) {
    return (
        <>
            <Card bg='light' className='mt-2'>
                <Card.Body>
                    <Card.Title className='text-start'>Upcoming Sessions</Card.Title>
                    {
                        SessionData.map((data: any , index:number) => {
                            return <SmallCard key={index} mentor_name={data.mentor_name} timings={data.timings} date={data.date} session_type={data.session_type} />
                        })
                    }
                </Card.Body>
            </Card>
        </>
    )
}

export default SessionsCard


function SmallCard({ mentor_name, timings, date, session_type }: ISmallCardProps) {
    
    return (
        <>
            <Card className='mt-2'>
                <Card.Body>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div>
                            <p>{mentor_name}</p>
                            <p>{session_type}</p>
                        </div>
                        <div>
                            <p>{timings}</p>
                            <p>{date}</p>
                        </div>

                        <Badge>{session_type}</Badge>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}