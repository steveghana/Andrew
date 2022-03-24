import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Box,
  CircularProgress,
} from "@mui/material";

//----------------------------------------
//Set Users Props
//----------------------------------------

type UsersProps = {
  users:
    | {
        name: { first: string; last: string };
        id: { value: number };
        picture: { thumbnail: string };
      }[]
    | null;
  isLoading: boolean;
  handleDelete: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

const Users = (props: UsersProps) => {
  console.log(props.users);

  return (
    <Box
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        margin: "20px",
      }}
    >
      {props.isLoading ? (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
            width: "95vw",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        props.users?.map((user) => (
          <Box>
            <Card key={user.id.value} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={user.picture.thumbnail}
                  alt="green iguana"
                ></CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Name | {user.name.first} {user.name.last}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Est dolor voluptate corporis debitis impedit modi iste
                    praesentium nemo perferendis! Quaerat!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="error"
                    variant="outlined"
                    style={{ display: "inline-block", margin: "10px" }}
                    onClick={(event) => props.handleDelete(event, id)}
                  >
                    Delete user
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Box>
        ))
      )}
    </Box>
  );
};

export default Users;
