<?php

namespace App\Controller;

use Stripe\Exception\ApiErrorException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Annotation\Route;

class PaymentController extends AbstractController
{
    /**
     * @Route("/payment", name="payment")
     * @return Response
     */
    public function payment(): Response
    {
        // dd('here');

        return $this->render('payment/card.html.twig', [
            'controller_name' => 'PaymentController',
        ]);
    }

    /**
     * @Route("/charger", name="charger")
     * @param Request $request
     * @param Session $session
     * @return Response
     * @throws ApiErrorException
     */
    public function charger(Request $request, Session $session)
    {
        $client_secret = null;
        $session = $session->get('data');

        $prix = (int) ($session['total']);

        if ($request->isMethod('get')) {
            \Stripe\Stripe::setApiKey('sk_test_51HNMhJD3fCN89TSWvZmH7zaacNb9zAVOW7JlFgSCZppeZKXm70Gc5by1snyXvPo4ZZnGT9bvyx3qdjhvit0XzORt00Cb69kJwE');

            //\Stripe\Stripe::setApiKey('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');
            $charge = \Stripe\PaymentIntent::create([
                'amount' => $prix,
                'currency' => 'eur',
                'description' => 'Example charge',
            ]);
            $client_secret = $charge->client_secret;
        }

        return $this->render('payment/card.html.twig', [

            'client_secret' => $client_secret,
            'prix' => $prix
        ]);
    }

    /**
     * @Route("/validation", name="validation")
     * @param Request $request
     * @return Response
     */
    public function validation(Request $request): Response
    {
        //        if ($request->isMethod('post')) {
        //            dd('here');
        //        }
        return $this->render('payment/validation.html.twig', [
            'controller_name' => 'PaymentController',
        ]);
    }
}
