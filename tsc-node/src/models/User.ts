import mongoose from "mongoose";
import bcrypt from "bcrypt";

type comparePasswordFunction = (candidatePassword: string, cb: (err: any, isMatch: any) => void) => void;

export type UserDocument = mongoose.Document & {
  username: string;
  password: string;

  comparePassword: comparePasswordFunction;
};

const userSchema = new mongoose.Schema<UserDocument>({
  username: { type: String, unique: true },
  password: { type: String, require: true }
});

/**
 * Password hash middleware.
 */
userSchema.pre("save", function save (next) {
  const user = this as UserDocument;
  if (!user.isModified("password")) { return next(); }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

const comparePassword: comparePasswordFunction = function (this: any, candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch: boolean) => {
    cb(err, isMatch);
  });
};

userSchema.methods.comparePassword = comparePassword;

export const User = mongoose.model<UserDocument>("User", userSchema);
