import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonInput, IonItem, IonLabel, IonList, IonNote, IonTextarea, IonToggle, IonToolbar, IonTitle, } from '@ionic/react';
import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Countries.css';

const Countries: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Countries</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <div>
                    <div>
                        <IonList inset={true}>
                        {data ? data.map((country: any) => (
                            <Country
                                name={`${country.name.common}`}
                                flag={country.flags.png}
                                key={country.ccn3}
                            />
                        )) : 'Loading...'}
                        </IonList>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

const Country: React.FC = ({ name, flag }) => (
    <div>
        <IonItem>
            <div className="row">
                <p>{name}</p>
                <img loading='lazy' src={flag}/>
            </div>
        </IonItem>
        <hr />
    </div>
);


export default Countries;
