import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import JobsCard from './Components/JobsCard'
import OverviewCard from './Components/OverviewCard'
import SessionsCard from './Components/SessionsCard'
import DashboardNavBar from './Navbar'
import Sidebar from './Sidebar/Sidebar'

type Props = {}

function Dashboard({ }: Props) {
    const [name, setName] = useState('name');
    const [dashboardStats, setDashboardStats] = useState({
        jobs_applied: 0,
        mentorship_sessions: 0,
        profile_views: 0,
        skills_verified: 0
    })

    const [jobPostings, setJobPostings] = useState([]);
    const [upcomingSessions, setUpcomingSessions] = useState([]);
    const getData = async () => {
        axios.get('https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818')
            .then((res) => {
                setName(res.data.full_name);
                setDashboardStats(res.data.dashboard_stats);
                setJobPostings(res.data.job_postings);
                setUpcomingSessions(res.data.upcoming_sessions);
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }


    const shuffle = () => {
        var m = jobPostings.length, t, i;
        let temp = jobPostings;
        // While there remain elements to shuffle…
        console.log(jobPostings, 'before');
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = temp[m];
            temp[m] = temp[i];
            temp[i] = t;
        }

        let newArray = [...temp];
        setJobPostings(newArray);

        m = upcomingSessions.length;
        temp = upcomingSessions;
        console.log(upcomingSessions , 'befire');
        while (m) {
            i = Math.floor(Math.random() * m--);

            t = temp[m];
            temp[m] = temp[i];
            temp[i] = t;
        }
        let arr = [...temp];
        setUpcomingSessions(arr);
    }
    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <DashboardNavBar name={name} onProfileClick={getData}/>
            <Sidebar shuffle={shuffle} />
            <Container>
                <Row className='mt-2 ms-4'>
                    <Col md={7} xs={12}>
                        <Row >
                            <OverviewCard data={dashboardStats} />
                        </Row>
                        <Row >
                            <SessionsCard SessionData={upcomingSessions} />
                        </Row>
                    </Col>
                    <Col md={5}>
                        <JobsCard jobsData={jobPostings} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard