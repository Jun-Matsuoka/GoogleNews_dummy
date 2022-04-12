import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HeaderStyle from "../style/Header.module.scss"
import Googlelogo from "../pic/gnews.jpg"
import { InputBase, Paper } from '@mui/material';
import { GridSearchIcon } from '@material-ui/data-grid';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import CloudIcon from '@mui/icons-material/Cloud';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const style = {
        textDecoration: "none",
        color: "gray",
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                style={{ backgroundColor: "#FFF", height: "71px" }}
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar className={HeaderStyle.Toolbar}>
                    <IconButton
                        style={{ margin: "0" }}
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon style={{ float: "left", margin: "0", padding: "0" }} />
                    </IconButton>

                    <Typography variant="h6" noWrap>
                        <Link to="/">
                            <div style={{":&hover":{color:"blue"}}}>
                            <img className={HeaderStyle.logo} src={Googlelogo} alt="Google News" />
                            </div>
                        </Link>
                    </Typography>

                    <Paper
                        className={Paper}
                        component="form"
                        elevation={0}
                        sx={{
                            p: "2px 4px",
                            display: "flex",
                            alignItems: "center",
                            width: 700,
                            marginLeft: "auto",
                            marginRight: "auto",
                            backgroundColor: "#F1F3F4",
                        }}
                    >
                        <IconButton sx={{ p: "10px" }} aria-label="menu">
                            <GridSearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1, }}
                            placeholder="トピック、場所ニュース提供元を検索"
                            inputProps={{ "aria-label": "search google maps" }}
                        />
                    </Paper>
                </Toolbar>

            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['トップページ', '天気'].map((text, index) => (
                        <Link to={index % 2 === 0 ? "/" : "weather"} style={style}>
                            <ListItem button key={text} onClick={handleDrawerClose}>
                                <ListItemIcon>{index % 2 === 0 ? <LanguageIcon /> : <CloudIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
                <Link to="Covid19" style={style} >
                    <List style={{ borderBottom: "1px #000" }} onClick={handleDrawerClose}>
                        <ListItem button key={`COVIT-19(新型コロナウイルス感染症)`}>
                            <ListItemIcon><CoronavirusIcon /></ListItemIcon>
                            <ListItemText primary={`COVIT-19(新型コロナウイルス感染症)`} />
                        </ListItem>
                    </List>
                </Link>
                <Divider />
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
            </main>
        </div>
    );
}
