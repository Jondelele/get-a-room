import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './MainView.css';
import Login from './GoogleLogin';
import BookingView from './BookingView';
import PreferencesView from './PreferencesView';
import { Preferences } from '../types';
import { getPreferences } from '../services/preferencesService';

const MainView = () => {
    const [preferences, setPreferences] = useState<Preferences | undefined>();

    useEffect(() => {
        getPreferences()
            .then(setPreferences)
            .catch((error) => {
                setPreferences(undefined);
            });
    }, []);

    return (
        <div>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/preferences">
                    <PreferencesView
                        preferences={preferences}
                        setPreferences={setPreferences}
                    />
                </Route>
                <Route path="/">
                    <BookingView />
                </Route>
            </Switch>
        </div>
    );
};

export default MainView;
