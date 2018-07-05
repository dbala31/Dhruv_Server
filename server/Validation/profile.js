const Validator = require('validator');
const isEmpty = require('./is-empty');
const validateProfileInput = require('../../validation/profile');

module.exports = function validateProfileInput(data) {
    let errors = {};

data.handle = !isEmpty(data.handle) ? data.handle : '';

if (!Validator.isLength(data.handle, {min: 2, max: 40 })) {
    errors.handle = 'Handle needs to between 2 and 40 characters';
}
if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Profile handle is required';
}
if(!isEmpty(data.youtube)) {
    if(!Validator.isURL(data.youtube)) {
        errors.youtube = 'Not a valid URL';
    }
}
if(!isEmpty(data.website)) {
    if(!Validator.isURL(data.website)) {
        errors.website = 'Not a valid URL';
    }
}
if(!isEmpty(data.twitter)) {
    if(!Validator.isURL(data.twitter)) {
        errors.twitter = 'Not a valid URL';
    }
}
if(!isEmpty(data.instagram)) {
    if(!Validator.isURL(data.instagram)) {
        errors.instagram = 'Not a valid URL';
    }
}
if(!isEmpty(data.facebook)) {
    if(!Validator.isURL(data.facebook)) {
        errors.facebook = 'Not a valid URL';
    }
}
if(!isEmpty(data.linkedin)) {
    if(!Validator.isURL(data.linkedin)) {
        errors.linkedin = 'Not a valid URL';
    }
}
return { errors, isValid: isEmpty(errors)}
};

router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
router.get('/handle/:handle', (req, res) => {
    const errors = {};
    Profile.findOne({ handle: req.params.handle })
        .populate('user', ['name', 'avatar'])
        .then(profile => {
            if(!profile) {
                errors.noprofile = 'There is no profile for this user';
                res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});


router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
router.get('/API/profile', (req, res) => {
    const errors = {};
    Profile.findOne({user: req.user.id})
        .populate('user', ['name', 'avatar'])
        .then(profile => {
            if (!profile) {
                errors.noprofile = 'There is no profile for this user';
                return res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

    router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
        router.get('/api/profile/user/:user_id', (req, res) => {
            const errors = {};
            Profile.findOne({ user: req.params.user_id })
                .populate('user', ['name', 'avatar'])
                .then(profile => {
                    if (!profile) {
                        errors.noprofile = 'There is no profile for this user';
                        return res.status(404).json(errors);
                    }
                    res.json(profile);
                })
                .catch(err => res.status(404).json(err));
            })}
    router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
        router.get('/api/profile/all', (req, res) => {
            const errors = {};
            Profile.find()
                .populate('user', ['name', 'avatar'])
                .then(profile => {
                    if (!profile) {
                        errors.noprofile = 'There is no profile for this user';
                        return res.status(404).json(errors);
                    }
                    res.json(profile);
                })
                .catch(err => res.status(404).json(err));
        });}


