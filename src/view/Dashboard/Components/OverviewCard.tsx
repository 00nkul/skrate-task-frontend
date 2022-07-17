import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

interface IProps {
    data: any
}
interface ISmallCardProps {
    title: string,
    value: string
}
function OverviewCard({ data }: IProps) {

    return (
        <>
            <Card bg='light'>
                <Card.Body>
                    <Card.Title className='text-start'>Overview</Card.Title>
                    <Row>
                        <Col md={6}>
                            <SmallCard title={"Jobs Applied"} value={data.jobs_applied} />
                        </Col>
                        <Col md={6}>
                            <SmallCard title={'Profile Views'} value={data.profile_views} />
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col md={6}>
                            <SmallCard title={'Mentorship Sessions'} value={data.mentorship_sessions} />
                        </Col>
                        <Col md={6}>
                            <SmallCard title={'Skills Verified'} value={data.skills_verified} />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default OverviewCard

function SmallCard({ title, value }: ISmallCardProps) {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title className='text-start'>{title} <span className='ms-4 fw-bold'>{value}</span> </Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}