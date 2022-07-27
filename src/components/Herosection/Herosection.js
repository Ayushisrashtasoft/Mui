import React from 'react'
import "./Herosection.scss"
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AddReactionIcon from '@mui/icons-material/AddReaction';

function Herosection() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Grid container className="hero-section">
                <Grid item md={6} className="hero-wrap ">
                    <Typography className="title">
                        Sweet Sweat for
                        <br></br> Sweet Body
                    </Typography>
                    <h4 className='text'>Bavley</h4>
                    <Typography variant="subtitle2" className="content">
                        Don't be afraid to sweat for a healthy body with our <br></br>
                        experienced coaching learn and trainers
                    </Typography>
                    <Button variant="contained" className="btn">Get Started</Button>
                    <Typography variant="h6">
                        Training Programs
                    </Typography>
                    <Stack direction="row" spacing={5} className="icon-box">
                        <Box className="img-box">
                            <AddReactionIcon className='img' />
                            <h4>Yoga</h4>
                        </Box>
                        <Box className="img-box">
                            <AddReactionIcon className="img" />
                            <h4>Muscles</h4>
                        </Box>
                        <Box className="img-box">
                            <AddReactionIcon className="img" />
                            <h4>Fitness</h4>
                        </Box>
                    </Stack>
                </Grid>
                {/*====== Contact section ======*/}
                <Grid item md={6} className="contact-wrap position-relative">
                    <div className="Card contact-form">
                        <Typography variant="h6">Membership Form</Typography>
                        <FormControl>
                            <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                            <br></br>
                            <Stack className="contact-details">
                                <TextField id="outlined-basic" label="Contact Number" variant="outlined" className="contact-number" />
                                <TextField id="outlined-basic" label="Email" variant="outlined" style={{ marginLeft: 10 }} className="email" />
                            </Stack>
                            <br></br>
                            <TextField id="outlined-basic" label="Reason to Join" variant="outlined" />
                            <br></br>
                            <Stack className="details">
                                <FormControl className="select-inputgroup">
                                    <InputLabel id="demo-simple-select-helper-label">Class</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>class1</MenuItem>
                                        <MenuItem value={20}>class2</MenuItem>
                                        <MenuItem value={30}>class3</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl style={{ marginLeft: 10 }} className="gender">
                                    <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Male</MenuItem>
                                        <MenuItem value={20}>Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                            <br></br>
                            <Button variant="contained" className="contact-btn">Join</Button>
                        </FormControl>
                    </div>
                    <h5 className="text">Bavley</h5>
                    <div>
                        <img src={require("../../Images/gym.png")} alt="" className='contact-img' />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Herosection