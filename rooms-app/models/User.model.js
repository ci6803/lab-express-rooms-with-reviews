//const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
// const userSchema = new Schema(
//   {
//     username: {
//       type: String,
//       required: [true, "Username is required"],
//       trim: true,
//     },

//     //email: { type: String, unique: true },
//     //fullName: String,
//     passwordHash: {
//       type: String,
//       required: [true, "Password is required"],
//       trim: true,
//     },
//   },
//   {
//     // this second object adds extra properties: `createdAt` and `updatedAt`
//     timestamps: true,
//   }
// );

// const User = model("User", userSchema);

// module.exports = User;

const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    //email: String,
    passwordHash: String,
    username: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
