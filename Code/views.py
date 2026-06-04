from django.shortcuts import render
from .models import CartItem

def cart(request):

    cart_items = CartItem.objects.all()

    subtotal = sum(
        item.product.price * item.quantity
        for item in cart_items
    )

    total = subtotal

    context = {
        "cart_items": cart_items,
        "subtotal": subtotal,
        "total": total
    }

    return render(request, "cart.html", context)

